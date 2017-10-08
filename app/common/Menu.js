import { colors, sizes } from '../constants'

const Menu = (props) => (
  <ul className={`menu ${props.className}`}>
    { props.items.map((item, idx) => (
      <li
        className={`item ${item.selected ? 'active' : ''}`}
        key={`menu-item-${idx}`}
      >
        <a
          href="#"
          onClick={item.action ? item.action(item, idx) : props.onClick(item, idx) }
        >
          { item.label }
        </a>
      </li>
    ))}
    <style jsx>{`
      ul li {
        display: flex;
      }

      ul li:hover,
      ul li.active {
        background: ${colors.gray.darker};
      }

      ul li a {
        display: flex;
        align-items: center;
        height: ${sizes.padding}px;
        flex: 1;
        text-decoration: none;
        padding: 0 10px;
        text-transform: uppercase;
        color: ${colors.gray.medDark};
        font-weight: bold;
        font-size: 12px;
      }

      ul li:hover a,
      ul li.active a {
        color: #fff;
      }
    `}</style>
  </ul>
)

Menu.defaultProps = {
  items: [],
  onClick: () => {}
}

export default Menu
