import { Suspense } from 'react'
import type { ComponentType } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const lazyLoad = (Comp: ComponentType) => {
  const AntdIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  return (
    <Suspense fallback={<Spin indicator={AntdIcon} />}>
      <Comp />
    </Suspense>
  )
}

export default lazyLoad
