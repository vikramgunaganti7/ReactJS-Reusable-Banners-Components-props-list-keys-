import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className, key} = bannerDetails
  return (
    <li className={className}>
      <div>
        <h1 className="main-heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="btn button" type="button">
          Show more
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
