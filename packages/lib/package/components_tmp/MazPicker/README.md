# MazPicker

> Date, Time & Range Picker

## Props

<!-- @vuese:MazPicker:props:start -->

| Name           | Description                                                                                                                            | Type      | Required | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value          | v-model --> input value must be is the same format like                                                                                | —         | `false`  | null                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| open           | if is `true`, the picker is open                                                                                                       | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| locale         | moment JS locale                                                                                                                       | —         | `false`  | getDefaultLocale()                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| position       | override the date picker postion (top / bottom / left / right)                                                                         | `String`  | `false`  | null                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| format         | the value in `v-model` will be returned in this format                                                                                 | `String`  | `false`  | YYYY-MM-DD h:mm a                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| formatted      | the value in `@formatted` event & shown in input will be formatted with this (formats availables on [MomentJS](https://momentjs.com/)) | `String`  | `false`  | llll                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| minDate        | minimum date the user can set (same format as the model)                                                                               | `String`  | `false`  | null                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| maxDate        | maximum date the user can set (same format as the model)                                                                               | `String`  | `false`  | null                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| dark           | set dark mode                                                                                                                          | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| persistent     | Date picker is always open                                                                                                             | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| noHeader       | to remove the picker's header                                                                                                          | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| noFooter       | to remove the picker's footer (buttons container)                                                                                      | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| noNow          | to remove the `now` button                                                                                                             | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| nowTranslation | translation of now of button                                                                                                           | `String`  | `false`  | Now                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| noWeekendsDays | all week-ends days disabled                                                                                                            | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| autoClose      | close picker on select date                                                                                                            | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| inline         | Inline picker UI (no input, no dialog)                                                                                                 | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| disabledDates  | disabled dates `Array of dates (same format as the value/format attribute)`,                                                           | `Array`   | `false`  | Array                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| disabledWeekly | Days of the week which are disabled every week, in Array format with day index, Sunday as 0 and Saturday as 6: `[0,4,6]`               | `Array`   | `false`  | Array                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| double         | show double calendar                                                                                                                   | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| range          | Enable range mode to select periode                                                                                                    | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| placeholder    | Change placeholder/label of input                                                                                                      | `String`  | `false`  | Select date time                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| noKeyboard     | Disabled keyboard accessibility & navigation                                                                                           | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| noTime         | Disabled time picker                                                                                                                   | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| noDate         | Disabled date picker                                                                                                                   | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| minuteInterval | Change minute interval in time picker                                                                                                  | `Number`  | `false`  | 1                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| disabledHours  | Must be an Array of integer: `0` to `24` (0 = 12am, 24 = 12pm) => `[0,1,2,3,4,5,6,7,19,20,21,22,23]`                                   | `Array`   | `false`  | Array                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| noOverlay      | Disable the overlay on mobile                                                                                                          | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| shortcut       | pre selected shortcut: provide a shortcut key                                                                                          | `String`  | `false`  | null                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| noShortcuts    | Disabled shortcuts in range mode                                                                                                       | `Boolean` | `false`  | false                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| shortcuts      | shortcuts for range mode                                                                                                               | `Array`   | `false`  | [{"key":"thisWeek","label":"This week","value":"isoWeek"},{"key":"lastWeek","label":"Last week","value":"-isoWeek"},{"key":"last7Days","label":"Last 7 days","value":7},{"key":"last30Days","label":"Last 30 days","value":30},{"key":"thisMonth","label":"This month","value":"month"},{"key":"lastMonth","label":"Last month","value":"-month"},{"key":"thisYear","label":"This year","value":"year"},{"key":"lastYear","label":"Last year","value":"-year"}] |
| color          | choose main color                                                                                                                      | `String`  | `false`  | primary                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

<!-- @vuese:MazPicker:props:end -->

## Events

<!-- @vuese:MazPicker:events:start -->

| Event Name | Description                                      | Parameters                             |
| ---------- | ------------------------------------------------ | -------------------------------------- |
| validate   | emit when the user click on validate button      | -                                      |
| now        | emit when the user click on now button           | -                                      |
| destroy    | emit on before destroy                           | -                                      |
| input      | return the date value (in `@input` or `v-model`) | date formatted with "format" option    |
| formatted  | return the date value (in `@formatted` event)    | date formatted with "formatted" option |
| focus      | emitted when the input is focused                | -                                      |
| is-shown   | emitted when picker is shown                     | -                                      |
| clear      | emitted when the input is cleared                | -                                      |
| is-hidden  | emit when picker is hide                         | -                                      |

<!-- @vuese:MazPicker:events:end -->

## Slots

<!-- @vuese:MazPicker:slots:start -->

| Name      | Description      | Default Slot Content              |
| --------- | ---------------- | --------------------------------- |
| icon-left | Custom left icon | -                                 |
| arrow     | The arrow icon   | Default arrow svg `<ArrowIcon />` |

<!-- @vuese:MazPicker:slots:end -->

## MixIns

<!-- @vuese:MazPicker:mixIns:start -->

| MixIn    |
| -------- |
| uniqueId |

<!-- @vuese:MazPicker:mixIns:end -->