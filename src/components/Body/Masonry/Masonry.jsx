import {categ2} from "../../../utils/data"
import  "./Masonry.css"

const Card = ({img, title}) => {
    return(
        <div className="item">
            <img src={img} alt={title} />
        </div>
    )
}

const Masonry = () => {
  return (
    <div className="masonry-container">
        <div className="mt-2 head">
            <p className="mb-1 title">Trending Categories</p>
            <p className="m-0">Stay ahead of the  fashion game with these hot trends to try!</p>
        </div>
        <div className="grid">
            {categ2?.map((v,i) => {
                return <Card key={i} {...v}/>
            })}
            {/* <div className="item" style={{blockSize: "2em"}}></div>
            <div className="item" style={{blockSize: "3em"}}></div>
            <div className="item" style={{blockSize: "1.6em"}}></div>
            <div className="item" style={{blockSize: "4em"}}></div>
            <div className="item" style={{blockSize: "2.2em"}}></div>
            <div className="item" style={{blockSize: "3em"}}></div>
            <div className="item" style={{blockSize: "4.5em"}}></div>
            <div className="item" style={{blockSize: "1em"}}></div>
            <div className="item" style={{blockSize: "3.5em"}}></div>
            <div className="item" style={{blockSize: "2.8em"}}></div> */}
        </div>
    </div>
  )
}

export default Masonry