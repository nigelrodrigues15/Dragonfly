export const fetchChart = (sym) => (
    $.ajax({
        method: 'GET',
        url: `https://api.iextrading.com/1.0/stock/${sym}/chart/1y?filter=date,label,high`
    })
);