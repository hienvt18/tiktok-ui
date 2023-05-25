import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';
import * as useService from '~/services/userService';

const cx = classNames.bind(Styles);

const Sidebar = () => {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await useService.getSuggested({ page: 1, perPage: 5 });
            setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
        };
        fetchApi();
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For Your"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} />
            {/* <SuggestedAccounts label="Following acounts" /> */}
        </aside>
    );
};

export default Sidebar;
