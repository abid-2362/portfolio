import Icon, { Icons } from '../common/Icons.tsx';
import { restaurantColors } from '../../theme/restaurantColors.ts';
import * as React from 'react';

const ProductBackIcon = () => <Icon type={Icons.Ionicons} name={'chevron-back'} color={restaurantColors.button.text} />;

export default ProductBackIcon;
