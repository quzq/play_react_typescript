import React from 'react'
interface Props {
  text: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
  onSubmit: (text: string) => void
}
const TextInput: React.FC<Props> = ({text, handleInputChange, onSubmit}  ) => {
    return (
        <div>
            <div className="inputForm">
                <div className="inner">
                    <input
                        type="text"
                        className="input"
                        value={text}
                        onChange={handleInputChange}
                    />
                    <button onClick={(e)=> onSubmit(text)} className="btn is-primary">追加</button>
                </div>
            </div>
        </div>
    )
}
export default TextInput