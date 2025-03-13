import styles from './index.module.less'
const NavFooter = () => {
  return (
    <div className={styles.footer}>
      <div>
        <a href=' javascript:;' target='_blank' rel='noreferrer'>
          末班车
        </a>
        <span className='gutter'>|</span>
        <a href='javascript:void(0)' target='_blank' rel='noreferrer'>
          React18+TS开发通用后台
        </a>
        <span className='gutter'>|</span>
        <a href='javascript:void(0)' target='_blank' rel='noreferrer'>
          Vue3全栈后台
        </a>
        <span className='gutter'>|</span>
        <a href='javascript:void(0)' target='_blank' rel='noreferrer'>
          Vue全家桶开发小米商城项目
        </a>
      </div>
      <div> React18通用后台</div>
    </div>
  )
}

export default NavFooter
