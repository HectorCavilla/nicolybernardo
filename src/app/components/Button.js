export const Button = ({ children, link, handleClick, variant = 'primary', className: customClass = '' }) => {
  const baseStyles = "block w-max text-lg leading-5 px-12 py-4 rounded-md transition-all duration-300 transform hover:-translate-y-1"

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
    secondary: "bg-transparent border-2 border-primary text-primary hover:bg-primary/5",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/5"
  }

  const combinedClassName = `${baseStyles} ${variants[variant] || variants.primary} ${customClass}`

  return (
    <a
      {...(handleClick && { onClick: handleClick })}
      {...(link && { href: link, target: "_blank" })}
      className={combinedClassName}>
      {children}
    </a>
  )
}