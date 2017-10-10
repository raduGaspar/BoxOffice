import { colors, sizes, effects } from '../constants'

const User = (props) => (
  <div className='images'>
    <div className='frame'>
      <img
        height='100%'
        src={props.user.photoURL}
        alt='user'
      />
      <img
        height='100%'
        src='/static/assets/logo.svg'
        alt='logo'
      />
    </div>
    <p className='name'>
      {props.user.displayName}
    </p>
    <style jsx>{`
      .images {
        position: relative;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        background ${colors.green};
        box-shadow: ${effects.shadow};
      }
      .images .frame {
        position: relative;
        width: 48px;
        height: 48px;
        border-radius: ${sizes.borderRadius}px;
        overflow: hidden;
        box-shadow: ${effects.shadow};
      }
      .images img {
        position: absolute;
        top: 0;
        left: 0;
      }
      .name {
        color: #fff;
        margin-left: 10px;
        font-weight: bold;
      }
    `}</style>
  </div>
)

export default User