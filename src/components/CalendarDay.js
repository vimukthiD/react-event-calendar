import React from 'react';
import classnames from 'classnames';

export default class CalendarDay extends React.Component {
    render () {
        const { day, isToday, events, onClick } = this.props;
        if (!day){
          const dayClasses = classnames({
            'flexColumn': true,
            'day': true,
            'inactive': true,
            'today': false,
          });
          return (
            <div
              className={dayClasses} style={{minHeight: this.props.emptyRowHeight}}>
              <div className="inner-grid">
                <div className="date">
                </div>
              </div>
            </div>
          )
        } else {
          const dayClasses = classnames({
            'flexColumn': true,
            'day': true,
            'inactive': day.siblingMonth,
            'today': isToday,
          });

          return (
            <div
              onClick={onClick.bind(null, this, day)}
              className={dayClasses}>
              <div className="inner-grid">
                <div className="date">
                  {day.day}
                </div>
                {events}
              </div>
            </div>
          );
        }
    }
}

CalendarDay.propTypes = {
    day: React.PropTypes.object.isRequired,
    isToday: React.PropTypes.bool,
    events: React.PropTypes.array,
    onClick: React.PropTypes.func,
    emptyRowHeight: React.PropTypes.num,
};

CalendarDay.defaultProps = {
    onClick: () => {},
}
