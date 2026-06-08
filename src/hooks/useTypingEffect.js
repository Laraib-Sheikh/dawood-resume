import { useState, useEffect } from 'react'

export function useTypingEffect(phrases, typingSpeed = 60, pauseMs = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < current.length) {
            setDisplayText(current.slice(0, charIndex + 1))
            setCharIndex((c) => c + 1)
          } else {
            setTimeout(() => setIsDeleting(true), pauseMs)
          }
        } else if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1))
          setCharIndex((c) => c - 1)
        } else {
          setIsDeleting(false)
          setPhraseIndex((i) => (i + 1) % phrases.length)
        }
      },
      isDeleting ? typingSpeed / 2 : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [phrases, phraseIndex, charIndex, isDeleting, typingSpeed, pauseMs])

  return displayText
}
