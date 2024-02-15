import React from 'react'
import { useTheme } from '@mui/material';

function theme() {

    const themeMode = useTheme()

    const themeStyle = {
        "text": {
            "fontSize": 11,
            "fill": themeMode.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        },
        "axis": {
            "domain": {
                "line": {
                    "stroke": "#777777",
                    "strokeWidth": 1
                }
            },
            "legend": {
                "text": {
                    "fontSize": 12,
                    "fill": themeMode.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "ticks": {
                "line": {
                    "stroke": "#777777",
                    "strokeWidth": 1
                },
                "text": {
                    "fontSize": 11,
                    "fill": themeMode.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }
        },
        "grid": {
            "line": {
                "stroke": "#dddddd",
                "strokeWidth": 1
            }
        },
        "legends": {
            "title": {
                "text": {
                    "fontSize": 11,
                    "fill": themeMode.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "text": {
                "fontSize": 11,
                "fill": themeMode.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            "ticks": {
                "line": {},
                "text": {
                    "fontSize": 10,
                    "fill": themeMode.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }
        },
        "annotations": {
            "text": {
                "fontSize": 13,
                "fill": themeMode.palette.text.primary,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "link": {
                "stroke": "#000000",
                "strokeWidth": 1,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "outline": {
                "stroke": "#000000",
                "strokeWidth": 2,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "symbol": {
                "fill": "#000000",
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            }
        },
        "tooltip": {
            "container": {
                "background": "#ffffff",
                "fontSize": 12,
                'color': '#0e0e0e',
            },
            "basic": {},
            "chip": {},
            "table": {},
            "tableCell": {},
            "tableCellValue": {}
        }
    }

    return themeStyle;
}

export default theme;
