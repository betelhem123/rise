import React from 'react'

const title = "Most Popular Tags"
const tagsList = [ { link: "#", text: "HP", }, { link: "#", text: "PRO MAX", }, { link: "#", text: "*360", }, { link: "#", text: "SLIM", }, { link: "#", text: "JBL", }, { link: "#", text: "i9", }, { link: "#", text: "SPECTER", }, { link: "#", text: "RGB", }, { link: "#", text: "MECHANICAL KEYBOARD", }, ];
const Tags = () => {
  return (
    <div className='widget widget-tags'>
      <div className="widet-header">
        <h5 className='title'>
{title}
        </h5>
      </div>
      <ul className="widget-wrapper">
        {
            tagsList.map((val, i) => (
                <li key={i}><a href={val.link}>{val.text}</a>

                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Tags
