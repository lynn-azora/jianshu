import React from 'react'
import Loadable from 'react-loadable'

let LoadableComponent = Loadable({
    loader: () => import ('./'),
    loading(){
        return <div>正在加载</div>
    }
});

const loadableComponent = () => <LoadableComponent />
export default loadableComponent