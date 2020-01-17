//子コンポーネント
import React from 'react';
interface Props {
  text: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}
const TextInput: React.FC<Props> = ({text, handleInputChange}) => {
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
                </div>
            </div>
        </div>
    )
}
export default TextInput