import { colors, sizes, effects } from '../constants'

export default (props) => (
  <div className="navbar">
    main nav bar actions and search
    <button onClick={() => props.logout()}>Sign Out</button>
    <style jsx>{`
      .navbar {
        position: relative;
        padding: 0 ${sizes.padding}px;
        border-bottom: 1px solid ${colors.gray.medium}
        height: 99px;
        display: flex;
        align-items: center;
        box-shadow: ${effects.shadow};
        justify-content: space-between;
      }
    `}</style>
  </div>
)
