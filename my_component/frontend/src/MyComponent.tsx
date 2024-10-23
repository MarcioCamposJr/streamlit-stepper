import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import "./style.css"

interface State {}

class MyComponent extends StreamlitComponentBase<State> {
  public componentDidMount(): void {
    // Ajusta a altura do componente ao montar
    Streamlit.setFrameHeight()
  }

  public componentDidUpdate(): void {
    // Ajusta a altura do componente ao atualizar
    Streamlit.setFrameHeight()
  }

  public render = (): ReactNode => {
    // Obtém os argumentos passados do Python
    const steps = this.props.args["steps"] as string[]
    const currentStep = this.props.args["currentStep"] as number
    const customCss = this.props.args["customCss"] as string

    // Renderiza o Stepper
    return (
      <div>
        {customCss && <style>{customCss}</style>}
        <div className="stepper">
          {steps.map((step, index) => {
            let stepClass = "step"
            if (index < currentStep) {
              stepClass += " completed"
            } else if (index === currentStep) {
              stepClass += " active"
            }

            return (
              <div key={index} className={stepClass}>
                <div className="circle">{index + 1}</div>
                <div className="label">{step}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default withStreamlitConnection(MyComponent)
