export default (props) => (
  <div className='user'>
    <div className='image'>
      <span />
      <img
        src={props.user.photoURL}
        alt='user-image'
      />
      <p className='name'>
        { props.user.displayName }
      </p>
    </div>

    { /* language=CSS */ }
    <style jsx>{`
      .image {
        position: relative;
        height: 150px;
        width: 150px;
        /*border-radius: 50%;*/
        /*border: 2px solid #fff;*/
        /*box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);*/
      }
      .image:before,
      .image:after, span {
        pointer-events: none;
        position: absolute;
        content: '';
        height: 100%;
        width: 100%;
        top: 0%;
        left: 0%;
        border-radius: 50%;
        box-shadow: 0 0 15px #287ec6;
        animation: glow-grow 2s ease-out infinite;
      }
      .image:after {
        animation-delay: .66s;
      }
      .image span {
        animation-delay: 1.33s;
      }
      .image img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
      }
      @keyframes glow-grow {
        0% {
          opacity: 0;
          transform: scale(1);
        }
        80% {
          opacity: 1;
        }
        100% {
          transform: scale(2);
          opacity: 0;
        }
      }

      .user .name {
        position: absolute;
        color: #fff;
        width: 80%;
        text-align: center;
        font-weight: bold;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-shadow: 0 0px 4px #000;
      }
    `}</style>
  </div>
)
