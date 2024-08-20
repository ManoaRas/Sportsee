export function StatsCard({ data, icon, img, name }) {
  return (
    <div className='stats-card'>
      <img className={`${icon} stats-card--icon`} alt={'Logo ' + name} src={img} />
      <div className='stats-card--desc'>
        <p className='stats-card--desc__data'>{data}</p>
        <p className='stats-card--desc__name'>{name}</p>
      </div>
    </div>
  )
}
