import "./style.scss";

export default function Footer({ jumpPage, currentPage, maxPage }) {
  function renderNumberPage() {
    let pages = [];
    for (let page = 1; page <= maxPage; page++) {
      pages.push(
        <div
          key={page}
          className={`${currentPage === page ? "footer__page footer__page--active" : "footer__page"}`}
          onClick={() => jumpPage(page)}
        >
          {page}
        </div>
      );
    }
    return pages;
  }

  return (
    <div className="footer">
      <div
        className="footer__page"
        onClick={currentPage > 1 ? () => jumpPage(currentPage - 1) : () => {}}
      >
        {"<"}
      </div>
      {renderNumberPage()}
      <div
        className="footer__page"
        onClick={
          currentPage < maxPage ? () => jumpPage(currentPage + 1) : () => {}
        }
      >
        {">"}
      </div>
    </div>
  );
}
