'use client'
import { use } from "react"

import Modal from "@/components/modal"
import Form from "@/components/articulos/form"
import Articulo from "@/components/articulos/item"

import { newArticulo, editArticulo, deleteArticulo } from "@/lib/actions"


function ListaArticulos({ articulos }) {
    const lista = use(articulos)

    return (
        <>
            <Modal openElement={"NUEVO"}>
                <Form action={newArticulo} title={"Crear artículo"} articulo={null} />
            </Modal>

            <div className="flex flex-wrap gap-4">
                {lista.map((articulo) => (
                    <Articulo key={articulo.id} articulo={articulo} >
                        <Modal openElement={"EDITAR"}>
                            <Form action={editArticulo} title={"Actualizar artículo"} articulo={articulo} />
                        </Modal>
                        <Modal openElement={"ELIMINAR"}>
                            <Form action={deleteArticulo} title={"Eliminar artículo"} articulo={articulo} disabled />
                        </Modal>
                    </Articulo>
                ))}
            </div>

        </>
    )
}

export default ListaArticulos