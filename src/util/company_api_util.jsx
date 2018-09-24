import $ from "jquery"; 

export const fetchChart = (sym) => (
    $.ajax({
        method: 'GET',
        url: `https://api.iextrading.com/1.0/stock/${sym}/chart/1y?filter=date,label,high`
    })
);

export const fetchPrice = sym => (
    $.ajax({
        method: 'GET',
        url: `https://api.iextrading.com/1.0/stock/${sym}/price`
    })
);

export const fetchlogo = sym => (
    $.ajax({
        method: 'GET',
        url: `https://api.iextrading.com/1.0/stock/${sym}/logo`
    })
);

export const fetchNews = (sym) => (
    $.ajax({
        method: 'GET',
        url: `https://api.iextrading.com/1.0/stock/${sym}/news/last/5`
    })
);

export const fetchStats = sym => (
    $.ajax({
        method: 'GET',
        url: `https://api.iextrading.com/1.0/stock/${sym}/stats?filter=marketcap,latestEPS,shortRatio,peRatioHigh`
    })
);

export const fetchFinancials = sym => (
  $.ajax({
    method: 'GET',
    url: `https://api.iextrading.com/1.0/stock/${sym}/financials?filter=totalRevenue,grossProfit,operatingIncome,netIncome`
  })
);
