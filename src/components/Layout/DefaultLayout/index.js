import classNames from 'classnames/bind';
import Styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/components/Header';
import Sidbar from './Sidebar';

const cx = classNames.bind(Styles);

const DefaultLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidbar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
