const ShinyText = ({
  text,
  speed = 2,
  delay = 0,
  color = "#b5b5b5",
  shineColor = "#ffffff",
  spread = 120,
  direction = "left",
  yoyo = false,
  pauseOnHover = false,
  disabled = false,
  className = "",
  fontSize
}) => {
  const isLeft = direction === "left";
  const classes = [
    "shiny-text",
    isLeft ? "to-left" : "to-right",
    pauseOnHover ? "pause-on-hover" : "",
    disabled ? "is-disabled" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const style = {
    "--st-color": color,
    "--st-shine": shineColor,
    "--st-spread": `${spread}px`,
    "--st-duration": `${speed}s`,
    "--st-delay": `${delay}s`,
    animationDirection: yoyo ? "alternate" : "normal",
    ...(fontSize ? { fontSize } : null)
  };

  return <span className={classes} style={style}>{text}</span>;
};

export default ShinyText;
