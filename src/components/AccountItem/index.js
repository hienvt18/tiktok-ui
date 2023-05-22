import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(Styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f94da1f363f63fb7e4b3008a4df5beba~c5_100x100.jpeg?x-expires=1684558800&x-signature=jh0ri98X5IewGcamEr9OmGF7ZBo%3D"
                alt="thuytien"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Mỹ Huyền
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>myhuyenfitness</span>
            </div>
        </div>
    );
}

export default AccountItem;
