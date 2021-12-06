import React from 'react'
import Folder from './Folder'
import '../App.css'

const HomePage = () => {
    return (
        <React.Fragment>
            <div className='main'>
                <Folder route='tin-moi-nhat' title='tin mới nhất' />
                <Folder route='tin-xem-nhieu' title='tin xem nhiều' />
                <Folder route='tin-noi-bat' title='tin nổi bật' />
                <Folder route='the-gioi' title='thế giới' />
                <Folder route='suc-khoe' title='sức khỏe' />
                <Folder route='doi-song' title='đời sống' />
                <Folder route='thoi-su' title='thời sự' />
                <Folder route='du-lich' title='du lịch' />
                <Folder route='kinh-doanh' title='kinh doanh' />
                <Folder route='khoa-hoc' title='khoa học' />
                <Folder route='so-hoa' title='số hóa' />
                <Folder route='giai-tri' title='giải trí' />
                <Folder route='oto-xe-may' title='xe' />
                <Folder route='the-thao' title='thể thao' />
                <Folder route='y-kien' title='ý kiến' />
                <Folder route='phap-luat' title='pháp luật' />
                <Folder route='startup' title='startup' />
                <Folder route='tam-su' title='tâm sự' />
                <Folder route='giao-duc' title='giáo dục' />
                <Folder route='cuoi' title='cười' />
            </div>
        </React.Fragment>
    )
}

export default HomePage
