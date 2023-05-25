import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async ({ page, perPage }) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            page,
            perPage: perPage,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
