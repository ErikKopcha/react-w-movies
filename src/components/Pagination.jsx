import React from 'react';

class Pagination extends React.Component {
  render() {
    const { _this, changePage } = this.props;

    return(
      <div className="mt-3 mb-3 justify-content-center d-flex">
        <button 
          onClick={changePage.bind(_this, 'prev')} 
          disabled={_this.state.page === 1 ? true : false} 
          type="button" 
          className="btn btn-info mr-3">
          Prev
        </button>
        <button 
          onClick={changePage.bind(_this, 'next')} 
          disabled={_this.state.page > 10 ? true : false} 
          type="button" 
          className="btn btn-info">
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;