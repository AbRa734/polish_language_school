import cn from 'classnames'
import { findInputError } from './findInputError'
import { isFormInvalid } from './isFormInvalid'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'

export const Input = ({
                          name,
                          label,
                          type,
                          id,
                          placeholder,
                          validation,
                          multiline,
                          className,
                      }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext()

    const inputErrors = findInputError(errors, name)
    const isInvalid = isFormInvalid(inputErrors)

    return (
        <div className={cn('flex flex-col w-full gap-2', className)}>
            <div className="flex justify-between">
                <label htmlFor={id}>
                    {label}
                </label>
                <AnimatePresence mode="wait" initial={false}>
                    {isInvalid && (
                        <InputError
                            message={inputErrors.error.message}
                            key={inputErrors.error.message}
                        />
                    )}
                </AnimatePresence>
            </div>
            {multiline ? (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    {...register(name, validation)}
                ></textarea>
            ) : (
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    {...register(name, validation)}
                />
            )}
        </div>
    )
}

const InputError = ({ message }) => {
    return (
        <motion.p
            className="communication_wrong_input"
            {...framer_error}
        >
            <MdError />
            {message}
        </motion.p>
    )
}

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
}