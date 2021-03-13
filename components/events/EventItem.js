import Link from 'next/link';
const EventItem = (props) => {
  // prep vars for jsx render
  const { id, title, image, date, location } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/[id]`;

  return <li key={id}>
    <img src={`/${image}`} alt={title} />
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <time>{humanReadableDate}</time>
      </div>
      <div>
        <address>{formattedAddress}</address>
      </div>
      <div>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </div>
  </li>
}
export default EventItem;