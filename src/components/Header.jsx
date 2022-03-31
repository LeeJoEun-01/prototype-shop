export default function Header() {
  return(
    <header>
      <div className="header__container">
        <div className="title">Awesome Prototypes in Shop</div>
        <div className="subtitle">
          Check out what other designers have created using ProtoPie—download
          these examples to learn exactly how they made their interactions.
        </div>
        <div className="btn__area">
          {/* target="_blank"에는 보안상 취약점이 발생하고 퍼포먼스가 저하되는 2가지 문제가 있고, 이 문제를 해결하기 위해서는 noopener noreferrer를 지정 */}
          <a href="https://www.protopie.io" target="_BLANK" rel="noreferrer"> 
            <button>Try ProtoPie Yourself</button>
          </a>
        </div>
      </div>
    </header>
  );
}