import { colors, sizes } from '../constants'

export default (props) => (
  <div className='navbar'>
    <div className='search-wrapper'>
      <input
        className='search'
        onChange={(e) => props.onChange(e.target.value)}
        placeholder='Search for show name'
      />
    </div>
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
      .navbar .search-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-right: ${sizes.padding}px;
      }
      .navbar .search {
        height: 40px;
        flex: 1;
        padding: 0 ${sizes.padding / 2}px
        border: 1px solid ${colors.gray.medium};
        outline: 0 none;
      }
    `}</style>
  </div>
)
