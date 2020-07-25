import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class Sorting extends PureComponent {
  constructor(props) {
    super(props);
    this._sortingOptions = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];
    this.state = {
      isFilterOpen: false,
      activeFilter: this.props.activeSort,
    };


    this._clickHandler = this._clickHandler.bind(this);
    // this._documetHandler = this._documetHandler.bind(this);
    this._sortTypeHandle = this._sortTypeHandle.bind(this);
  }

  // доработать
  _documetHandler() {
    this.setState((prevState) => {
      return {isFilterOpen: !prevState.isFilterOpen};
    });

    document.removeEventListener(`click`, this._documetHandler);
  }

  _clickHandler() {
    this.setState((prevState) => {
      return {isFilterOpen: !prevState.isFilterOpen};
    });
    // доработать
    // document.addEventListener(`click`, this._documetHandler)
  }

  _sortTypeHandle(filter) {
    this.setState(() => {
      return {activeFilter: filter};
    });

  }

  // componentDidUpdate() {
  //   console.log(this.state)
  // }

  _renderSortingItems() {
    const {onClickSort} = this.props;

    return this._sortingOptions.map((item) => {
      const activeFilter = this.state.activeFilter === item ? `places__option--active` : ``;
      const sortTypeHandle = () => {
        this.setState(() => {
          return {activeFilter: item};
        });

        onClickSort(item);
        this._clickHandler();
      };

      return (
        <li
          className={`places__option ${activeFilter}`}
          tabIndex="0"
          key={item}
          onClick={sortTypeHandle}
        >
          {item}
        </li>
      );
    });
  }

  render() {
    const state = this.state.isFilterOpen ? `places__options--opened` : ``;
    const {activeSort} = this.props;

    return <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick = {this._clickHandler}
        className="places__sorting-type" tabIndex="0">
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${state}`}>
        {this._renderSortingItems()}
      </ul>
    </form>;
  }
}

Sorting.propTypes = {
  onClickSort: PropTypes.func.isRequired,
  activeSort: PropTypes.oneOf([`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`]),
};
