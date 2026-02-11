import { useEffect, useState } from "react"

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    })

    if(ref.current) observer.observe(ref.current)

    //observer.observe(ref.current);
    return () => {
      //if(ref.current) observer.unobserve(ref.current)
      observer.disconnect()
    };
  }, [ref])

  return isIntersecting
}