import s from './Loader.module.css'
import loadind from './Loading.png'

export const Loader = () => (
    <div className={s.loader}>
        <img src={loadind} alt="loading" />
    </div>
)
