export function StatsCard({ data, icon, img, name }) {
  return (
    <div>
      <img className={icon} alt={'Logo ' + name} src={img} />
      <div>
        <p className=''>{data}</p>
        <p className=''>{name}</p>
      </div>
    </div>
  )
}
