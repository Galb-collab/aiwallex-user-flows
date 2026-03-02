import React, { useRef, useState, useCallback } from 'react'
import { useSubmittingApplication } from '../../context/SubmittingApplicationContext'

const SUPPORTED_TYPES = 'DOCX, PDF, JPG, JPEG, PNG, BMP'
const MAX_MB = 20

export function SubmitApplicationStep() {
  const {
    goToReview,
    goToThankYou,
    confirmAuthorised,
    setConfirmAuthorised,
    agreeTerms,
    setAgreeTerms,
    signatureDataUrl,
    setSignatureDataUrl,
    extraFiles,
    setExtraFiles,
    canSubmit,
  } = useSubmittingApplication()

  const [advisoryOpen, setAdvisoryOpen] = useState(true)
  const canvasRef = useRef(null)
  const isDrawingRef = useRef(false)

  const getCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return null
    return { canvas, ctx: canvas.getContext('2d') }
  }, [])

  const getCoords = useCallback((e) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    }
  }, [])

  const startDrawing = useCallback((e) => {
    e.preventDefault()
    const { ctx } = getCanvas()
    if (!ctx) return
    ctx.strokeStyle = '#1a1a1a'
    ctx.lineWidth = 2
    ctx.lineCap = 'round'
    isDrawingRef.current = true
    const { x, y } = getCoords(e)
    ctx.beginPath()
    ctx.moveTo(x, y)
  }, [getCanvas, getCoords])

  const draw = useCallback((e) => {
    e.preventDefault()
    if (!isDrawingRef.current) return
    const { ctx } = getCanvas()
    if (!ctx) return
    const { x, y } = getCoords(e)
    ctx.lineTo(x, y)
    ctx.stroke()
  }, [getCanvas, getCoords])

  const stopDrawing = useCallback(() => {
    if (!isDrawingRef.current) return
    isDrawingRef.current = false
    const { canvas } = getCanvas()
    if (canvas) setSignatureDataUrl(canvas.toDataURL('image/png'))
  }, [getCanvas, setSignatureDataUrl])

  const clearSignature = useCallback(() => {
    const { canvas, ctx } = getCanvas()
    if (!canvas || !ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setSignatureDataUrl('')
  }, [getCanvas, setSignatureDataUrl])

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || [])
    setExtraFiles((prev) => [...prev, ...files])
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files || [])
    setExtraFiles((prev) => [...prev, ...files])
  }

  const handleDragOver = (e) => e.preventDefault()

  const handleSubmit = () => {
    if (!canSubmit) return
    goToThankYou()
  }

  return (
    <div className="sub-app-submit">
      <div className="sub-app-advisory" onClick={() => setAdvisoryOpen((o) => !o)}>
        <span className="sub-app-advisory-icon">🔔</span>
        <span className="sub-app-advisory-text">Please click here to supply other documents as advised by Airwallex.</span>
        <span className="sub-app-advisory-chevron">{advisoryOpen ? '▲' : '▼'}</span>
      </div>

      {advisoryOpen && (
        <div
          className="sub-app-upload-zone"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <span className="sub-app-upload-icon">📁</span>
          <span className="sub-app-upload-label">Document upload</span>
          <p className="sub-app-upload-hint">Drop your files here or</p>
          <label className="sub-app-choose-file">
            <input type="file" multiple accept=".docx,.pdf,.jpg,.jpeg,.png,.bmp" onChange={handleFileChange} />
            Choose file
          </label>
          <p className="sub-app-upload-specs">Supported files: {SUPPORTED_TYPES} max {MAX_MB}MB.</p>
        </div>
      )}

      {extraFiles.length > 0 && (
        <ul className="sub-app-file-list">
          {extraFiles.map((f, i) => (
            <li key={i}>{f.name} ({(f.size / 1024).toFixed(1)} KB)</li>
          ))}
        </ul>
      )}

      <div className="sub-app-checkboxes">
        <label className="sub-app-checkbox-label">
          <input
            type="checkbox"
            checked={confirmAuthorised}
            onChange={(e) => setConfirmAuthorised(e.target.checked)}
          />
          <span>
            I confirm that I am authorised to fill out this form and operate the account on behalf of the business, and that the information provided is true and correct.
          </span>
        </label>
        <label className="sub-app-checkbox-label">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />
          <span>
            I agree to <a href="#treasury" className="link-terms">Treasury Management Terms</a> and <a href="#payment" className="link-terms">Payment Terms</a>.
          </span>
        </label>
      </div>

      <div className="sub-app-signature">
        <h3 className="form-section-title">Draw your signature in the box below</h3>
        <div className="sub-app-signature-wrap">
          <canvas
            ref={canvasRef}
            width={560}
            height={180}
            className="sub-app-signature-canvas"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
        </div>
        <p className="sub-app-signature-ack">
          By clicking &quot;Submit&quot;, I acknowledge that the signature will be the electronic representation of my signature for all purposes.
        </p>
        <button type="button" className="sub-app-clear-sig" onClick={clearSignature}>
          Clear signature
        </button>
      </div>

      <div className="form-actions">
        <button type="button" className="btn-back" onClick={goToReview}>Back</button>
        <button
          type="button"
          className="btn-save-next"
          onClick={handleSubmit}
          disabled={!canSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )
}
