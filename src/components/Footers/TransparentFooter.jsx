/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a href="https://vk.com/bfl32" target="_blank">
                <i className="fab fa-vk" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()} -{" "}
          <a href="https://vk.com/bfl32" target="_blank">
            Брянская Футбольная Лига
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
