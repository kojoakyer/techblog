
// import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'


const RichText = ({ content }) => {
    console.log(content,'rich');
    const options = {}

    return <>{documentToReactComponents(content, options)}</>
  }


export default RichText