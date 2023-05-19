import classNames from 'classnames/bind';
import Styles from './Sidebar.module.scss';

const cx = classNames.bind(Styles);

const Sidbar = () => {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    );
};

export default Sidbar;
