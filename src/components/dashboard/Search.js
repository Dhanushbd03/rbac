import React from 'react';
import { Input } from '@/components/ui/input';
import { Search as Icon } from 'lucide-react';
var Search = function () {
    return (React.createElement("div", { className: 'px-5 relative' },
        React.createElement(Input, { className: 'relative pl-10 w-96', placeholder: 'Search' }),
        React.createElement(Icon, { className: 'absolute top-2 left-7 text-gray-500' })));
};
export default Search;
