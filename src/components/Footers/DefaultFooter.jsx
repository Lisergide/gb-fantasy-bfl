/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
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
    </>
  );
}

export default DefaultFooter;
