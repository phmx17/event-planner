import EventItem from './EventItem';

const EventList = (props) => {
  const { items } = props;
  return <div>
    { items.map(event => <EventItem     
        key={event.id}
        id={event.id}
        title={event.title}
        image={event.image}
        date={event.date}
        location={event.location}        
        />
      )
    }
  </div>
}
export default EventList;