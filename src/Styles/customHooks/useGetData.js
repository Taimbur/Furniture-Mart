import { useEffect, useState } from 'react'
import { db } from '../../fireebase.js'
import { collection, onSnapshot } from 'firebase/firestore'

const useGetData = collectionName => {
    const [data, setData] = useState([]);
    const collectionRef = collection(db, collectionName)
    useEffect(() => {
        const getData = async () => {
            // firebase realtimem data
            await onSnapshot(collectionRef, (snapshot) => {

                setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))

            })
        };
        getData()

    },)


    return { data };
}

export default useGetData