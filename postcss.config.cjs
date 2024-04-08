const isH5 = process.env.UNI_PLATFORM === 'h5'
const isApp = process.env.UNI_PLATFORM === 'app'
const WeappTailwindcssDisabled = isH5 || isApp

/**
 * @type {import('postcss').AcceptedPlugin[]}
 */
const plugins = [require('tailwindcss')(), require('autoprefixer')()]

// 下方为 px 转 rpx 功能
plugins.push(require('weapp-tailwindcss/css-macro/postcss'))

module.exports = plugins
