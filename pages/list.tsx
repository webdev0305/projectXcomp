import admin from "styles/pages/Admin.module.scss" // Page styles
import cn from "classnames"
import { token, ICompetition } from "state/competition" // Global state: Tokens
import DefaultErrorPage from 'next/error'
import Link from "next/link"
import CompetitionItem from "components/CompetitionItem"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function ListCompetitionPage() {
  const router = useRouter()
  const {
    dataLoading,
    competitions,
    user
  } = token.useContainer()
  const [filter, setFilter] = useState({
    status: '-1'
  })
  const itemHref = (item: ICompetition) => {
    if (item.status == 0)
      return `/edit/${item.id}`
    return `/competition/${item.id}`
  }
  useEffect(() => {
    if (user?.isOwner == false) {
      console.log(user.isOwner)
      router.push('/')
    }

  }, [user])
  return (
    <div className={cn(dataLoading && admin.loading)}>
      <div className="page-wrapper">
        <div className="inner-hero-section style--five">
          <div className="bg-shape">
            <img src="assets/images/elements/inner-hero-shape.png" alt="image" />
          </div>
        </div>
        <div className="mt-minus-100 pb-120">
          <div className="container">
            <div className="flex mb-4 gap-2 justify-between mt-28">
              <select className="border-2 rounded-md p-2 w-auto text-white" value={filter.status} onChange={(e) => setFilter({ ...filter, status: e.currentTarget.value })}>
                <option value="-1">All</option>
                <option value="0">Ready</option>
                <option value="1">Pending</option>
                <option value="1.1">&nbsp;&nbsp;&nbsp;Timed out</option>
                <option value="1.2">&nbsp;&nbsp;&nbsp;Sold out</option>
                <option value="2">Finished</option>
              </select>
              <Link href="/create" passHref>
                <button className="px-2 font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-700">Create New</button>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {!dataLoading && competitions?.filter((item: any) => {
                if (filter) {
                  if (filter.status === '0') return item.status === 0
                  else if (filter.status === '1') return item.status === 1
                  else if (filter.status === '1.1') return item.status === 1 && item.timeEnd && item.timeEnd <= new Date()
                  else if (filter.status === '1.2') return item.status === 1 && item.countTotal == item.countSold
                  else if (filter.status === '2') return item.status === 2
                }
                return true
              }).reverse().map((item: any, index: number) => (
                <div className={cn(admin.item, "mb-12 md:px-4")} key={index}>
                {/* <div key={index}> */}
                  <CompetitionItem
                    href={itemHref(item)}
                    item={item}
                    showStatus={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}