import logoDarkImg from "../images/logo-dark.png"

export default function PreviewPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div style={{width: "1200px", height: "600px"}} className="bg-brand flex items-center justify-center">
        <img src={logoDarkImg} alt="Marketing Mind" className="h-44"/>
      </div>
    </div>
  )
}