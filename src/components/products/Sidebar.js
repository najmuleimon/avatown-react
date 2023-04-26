import {category, contents, prices, amounts, support} from '../../data/options';

const Sidebar = () => {
  return (
    <div className='w-full xs:w-64 bg-[#FAFAFA] p-[10px] pr-5 flex flex-col gap-[11px]'>
        <div>
            <h3 className='text-xs font-bold text-black pb-[5px]'>Category</h3>
            <ul className='pl-[10px] space-y-[1px]'>
                {
                    category.map((item) => (
                        <li key={item.id} className='h-4'>
                            <button type='button' className='text-xs font-medium text-black'>{item.title}</button>
                        </li>
                    ))
                }
            </ul>
        </div>

        <div>
            <h3 className='text-xs font-bold text-black pb-[5px]'>Contents</h3>
            <ul className='pl-[10px] space-y-[1px]'>
                {
                   contents.map((item) => (
                    <label key={item.id} htmlFor={item.id} className="flex items-center gap-[6px] cursor-pointer">
                        <input type="checkbox" id={item.id} />
                        <p className='text-xs font-medium text-black flex items-center gap-1'>
                            {item.title} 
                            <span className="inline-block h-3 w-3 rounded-full" style={{backgroundColor: item.color}}></span>
                        </p>
                    </label>
                   )) 
                }
            </ul>
        </div>
        
        <div>
            <h3 className='text-xs font-bold text-black pb-[5px]'>Price</h3>
            <ul className='pl-[10px] space-y-[1px]'>
                {
                   prices.map((item) => (
                    <label key={item.id} htmlFor={item.id} className="flex items-center gap-[6px] cursor-pointer">
                        <input type="checkbox" id={item.id} />
                        <p className='text-xs font-medium text-black'>{item.title}</p>
                    </label>
                   )) 
                }
            </ul>
        </div>

        <div>
            <h3 className='text-xs font-bold text-black pb-[5px]'>Polygon amount</h3>
            <ul className='pl-[10px] space-y-[1px]'>
                {
                   amounts.map((item) => (
                    <label key={item.id} htmlFor={item.id} className="flex items-center gap-[6px] cursor-pointer">
                        <input type="checkbox" id={item.id} />
                        <p className='text-xs font-medium text-black'>{item.title}</p>
                    </label>
                   )) 
                }
            </ul>
        </div>

        <div>
            <h3 className='text-xs font-bold text-black pb-[5px]'>Auto upload support</h3>
            <ul className='pl-[10px] space-y-[1px]'>
                {
                   support.map((item) => (
                    <label key={item.id} htmlFor={item.id} className="flex items-center gap-[6px] cursor-pointer">
                        <input type="checkbox" id={item.id} />
                        <p className='text-xs font-medium text-black'>{item.title}</p>
                    </label>
                   )) 
                }
            </ul>
        </div>
    </div>
  )
}

export default Sidebar