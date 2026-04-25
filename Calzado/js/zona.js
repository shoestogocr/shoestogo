// =============================
// 📍 ZONAS DATA
// =============================

const zonas = {
    sj: {
        nombre: "San José",
        cantones: {
            curridabat: {
                nombre: "Curridabat",
                distritos: ["Curridabat", "Granadilla", "Sanchez"]
            },
            desamparados: {
                nombre: "Desamparados",
                distritos: ["Damas", "Desamparados", "Gravillas", "San Antonio"]
            },
            escazu: {
                nombre: "Escazú",
                distritos: ["Escazú", "San Antonio", "San Rafael"]
            },
            guadalupe: {
                nombre: "Guadalupe",
                distritos: ["Calle Blancos", "Guadalupe", "San Francisco", "Ipis"]
            },
            montes: {
                nombre: "Montes de Oca",
                distritos: ["Mercedes", "Sabanilla", "San Pedro", "San Rafael"]
            },
            moravia: {
                nombre: "Moravia",
                distritos: ["San Vicente", "La Trinidad", "La Isla", "Los Sitios", "Jardines", "Platanares", "San Jeronimo"]
            },
            san: {
                nombre: "San José",
                distritos: ["Carmen", "Catedral", "Mata Redonda", "Pavas", "Merced", "San Francisco de Dos Rios", "La Uruca", "Zapote"]
            },
            santa: {
                nombre: "Santa Ana",
                distritos: ["Brasil", "Pozos", "Santa Ana", "Uruca"]
            },
            tibas: {
                nombre: "Tibás",
                distritos: ["Llorente", "Cinco Esquinas", "Colima", "San Juan"]
            },
            vaz: {
                nombre: "Vazquez de Coronado",
                distritos: ["Cascajal", "Dulce Nombre", "Patalillo", "San Isidro", "San Rafael", "San Antonio"]
            }
        }
    },
    al: {
        nombre: "Alajuela",
        cantones: {
            alajuela: {
                nombre: "Alajuela",
                distritos: ["Alajuela", "Desamparados", "Rio Segundo", "San Rafael", "Tambor"]
            }
        }
    },
    hr: {
        nombre: "Heredia",
        cantones: {
            barva: {
                nombre: "Barva",
                distritos: ["Barva", "San José de la Montaña", "San Pablo", "San Rafael", "Santa Barbara", "Santa Lucia"]
            },
            belen: {
                nombre: "Belén",
                distritos: ["La Asuncion", "La Rivera", "San Antonio"]
            },
            flores: {
                nombre: "Flores",
                distritos: ["Barrantes", "Llorente", "San Joaquin"]
            },
            heredia: {
                nombre: "Heredia",
                distritos: ["Heredia", "Mercedes", "San Francisco", "La Ulloa"]
            }
        }
    },
    cr: {
        nombre: "Cartago",
        cantones: {
            cartago: {
                nombre: "Cartago",
                distritos: ["Agua Caliente", "Carmen", "Dulce Nombre", "Guadalupe", "Occidental", "Oriental", "San Nicolas"]
            },
            union: {
                nombre: "La Unión",
                distritos: ["Concepcion", "Dulce Nombre", "Rio Azul", "San Diego", "San Juan", "San Rafael", "Tres Rios"]
            }
        }
    }
};

// =============================
// ⚙️ LOGICA DE SELECTS
// =============================

document.addEventListener("DOMContentLoaded", function () {

    const provinciaSelect = document.getElementById("provincia");
    const cantonSelect = document.getElementById("canton");
    const distritoSelect = document.getElementById("distrito");

    // PROVINCIA → CANTON
    provinciaSelect.addEventListener("change", function () {

        cantonSelect.innerHTML = "<option value=''>Cantón</option>";
        distritoSelect.innerHTML = "<option value=''>Distrito</option>";

        let data = zonas[this.value];

        if (data) {
            for (let key in data.cantones) {
                cantonSelect.innerHTML += `<option value="${key}">${data.cantones[key].nombre}</option>`;
            }
        }
    });

    // CANTON → DISTRITO
    cantonSelect.addEventListener("change", function () {

        distritoSelect.innerHTML = "<option value=''>Distrito</option>";

        let provincia = provinciaSelect.value;
        let data = zonas[provincia].cantones[this.value];

        if (data) {
            data.distritos.forEach(d => {
                distritoSelect.innerHTML += `<option>${d}</option>`;
            });
        }
    });

});

// =============================
// 🚀 BOTON VALIDAR
// =============================

function verificarZona() {

    let provincia = document.getElementById("provincia").value;
    let canton = document.getElementById("canton").value;
    let distrito = document.getElementById("distrito").value;

    let resultado = document.getElementById("resultadoZona");

    if (provincia && canton && distrito) {
        resultado.innerHTML = "✅ Sí tenemos cobertura en tu zona 🚀";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "⚠️ Completa todos los campos";
        resultado.style.color = "red";
    }
}