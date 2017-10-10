import { colors, sizes } from '../constants'

export default (props) => (
  <div className='navbar'>
    main nav bar actions and search
    <button onClick={() => props.logout()}>Sign Out</button>
    <style jsx>{`
      .navbar {
        position: relative;
        padding: 0 ${sizes.padding}px;
        border-bottom: 1px solid ${colors.gray.medium}
        height: ${sizes.topBarHeight}px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `}</style>
  </div>
)
